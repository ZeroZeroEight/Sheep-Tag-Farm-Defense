import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";

//===========================================================================
// Trigger: Stampede Move
//===========================================================================
const Trig_Stampede_Move_Func002Func001Func001Func006C = (): boolean => {


	if ( ( ! ( DistanceBetweenPoints( udg_TempPoint, udg_TempPoint2 ) > 2000 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Stampede_Move_Func002Func001Func001Func007C = (): boolean => {


	if ( ( ! ( udg_StampedeSpeed[ GetConvertedPlayerId( GetOwningPlayer( GetEnumUnit() ) ) ] >= 20 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Stampede_Move_Func002Func001Func001Func008Func009002002 = (): boolean => {

	return ( GetUnitAbilityLevelSwapped( FourCC( "A00S" ), GetFilterUnit() ) > 0 );

};


const Trig_Stampede_Move_Func002Func001Func001Func008Func010C = (): boolean => {


	if ( ( ! ( CountUnitsInGroup( udg_TempUnitGroup ) === 0 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Stampede_Move_Func002Func001Func001Func008C = (): boolean => {


	if ( ( ! ( IsTerrainPathableBJ( udg_TempPoint2, PATHING_TYPE_FLYABILITY ) === false ) ) ) {

		return false;

	}


	if ( ( ! ( GetUnitStateSwap( UNIT_STATE_LIFE, GetEnumUnit() ) < 62489 ) ) ) {

		return false;

	}


	if ( ( ! ( IsUnitAliveBJ( udg_StampedeUnit[ GetConvertedPlayerId( GetOwningPlayer( GetEnumUnit() ) ) ] ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Stampede_Move_Func002Func001Func001C = (): boolean => {


	if ( ( ! ( GetUnitAbilityLevelSwapped( FourCC( "A00S" ), GetEnumUnit() ) > 0 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Stampede_Move_Func002Func001C = (): boolean => {


	if ( ( ! ( GetOwningPlayer( GetEnumUnit() ) !== Player( PLAYER_NEUTRAL_AGGRESSIVE ) ) ) ) {

		return false;

	}

	return true;

};


const Trig_Stampede_Move_Func002A = (): void => {


	if ( ( Trig_Stampede_Move_Func002Func001C() ) ) {


		if ( ( Trig_Stampede_Move_Func002Func001Func001C() ) ) {

			udg_TempPoint = GetUnitLoc( GetEnumUnit() );
			SetUnitFacingToFaceUnitTimed( GetEnumUnit(), udg_StampedeUnit[ GetConvertedPlayerId( GetOwningPlayer( GetEnumUnit() ) ) ], 0 )
			udg_TempPoint2 = PolarProjectionBJ( udg_TempPoint, udg_StampedeSpeed[ GetConvertedPlayerId( GetOwningPlayer( GetEnumUnit() ) ) ], GetUnitFacing( GetEnumUnit() ) );
			udg_TempPoint3 = GetUnitLoc( udg_StampedeUnit[ GetConvertedPlayerId( GetOwningPlayer( GetEnumUnit() ) ) ] );

			if ( ( Trig_Stampede_Move_Func002Func001Func001Func006C() ) ) {

				udg_StampedeSpeed[ GetConvertedPlayerId( GetOwningPlayer( GetEnumUnit() ) ) ] = ( udg_StampedeSpeed[ GetConvertedPlayerId( GetOwningPlayer( GetEnumUnit() ) ) ] + 0.25 );

			} else {

				udg_StampedeSpeed[ GetConvertedPlayerId( GetOwningPlayer( GetEnumUnit() ) ) ] = ( udg_StampedeSpeed[ GetConvertedPlayerId( GetOwningPlayer( GetEnumUnit() ) ) ] + 0.15 );

			}


			if ( ( Trig_Stampede_Move_Func002Func001Func001Func007C() ) ) {

				udg_StampedeSpeed[ GetConvertedPlayerId( GetOwningPlayer( GetEnumUnit() ) ) ] = 20;

			} else {

			null

			}


			if ( ( Trig_Stampede_Move_Func002Func001Func001Func008C() ) ) {

				SetUnitMoveSpeed( GetEnumUnit(), 1 )
				SetUnitX( GetEnumUnit(), GetLocationX( udg_TempPoint2 ) )
				SetUnitY( GetEnumUnit(), GetLocationY( udg_TempPoint2 ) )

			} else {

				SetUnitPathing( GetEnumUnit(), true )
				SetUnitMoveSpeed( GetEnumUnit(), 430 )
				UnitRemoveAbilityBJ( FourCC( "A00S" ), GetEnumUnit() )
				udg_StampedeUnit[ GetConvertedPlayerId( GetOwningPlayer( GetEnumUnit() ) ) ] = null;
				udg_TempUnitGroup = GetUnitsInRectMatching( GetEntireMapRect(), Condition( Trig_Stampede_Move_Func002Func001Func001Func008Func009002002 ) );

				if ( ( Trig_Stampede_Move_Func002Func001Func001Func008Func010C() ) ) {

					DisableTrigger( GetTriggeringTrigger() )

				} else {

				null

				}

				DestroyGroup( udg_TempUnitGroup )

			}

			RemoveLocation( udg_TempPoint )
			RemoveLocation( udg_TempPoint2 )

		} else {

		null

		}


	} else {

	null

	}


};


const Trig_Stampede_Move_Actions = (): void => {

	udg_TempGroup = GetUnitsOfTypeIdAll( FourCC( "E00C" ) );
	ForGroupBJ( udg_TempGroup, Trig_Stampede_Move_Func002A )
	DestroyGroup( udg_TempGroup )

};


//===========================================================================
const InitTrig_Stampede_Move = (): void => {

	gg_trg_Stampede_Move = CreateTrigger();
	DisableTrigger( gg_trg_Stampede_Move )
	TriggerRegisterTimerEventPeriodic( gg_trg_Stampede_Move, 0.03 )
	TriggerAddAction( gg_trg_Stampede_Move, Trig_Stampede_Move_Actions )

};

addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_Stampede_Move();

} );
