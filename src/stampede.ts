import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";

//===========================================================================
// Trigger: Stampede
//===========================================================================
const Trig_Stampede_Func003Func001Func001Func001Func001C = (): boolean => {


	if ( ( ! ( GetUnitStateSwap( UNIT_STATE_LIFE, GetEnumUnit() ) < 62489 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Stampede_Func003Func001Func001Func001C = (): boolean => {


	if ( ( ! ( GetUnitStateSwap( UNIT_STATE_LIFE, GetEnumUnit() ) >= 62498.5 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Stampede_Func003Func001Func001Func004002003 = (): boolean => {

	return ( IsUnitType( GetFilterUnit(), UNIT_TYPE_ANCIENT ) === true );

};


const Trig_Stampede_Func003Func001Func001Func005Func002C = (): boolean => {


	if ( ( ! ( GetUnitStateSwap( UNIT_STATE_MANA, GetEnumUnit() ) > 4 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Stampede_Func003Func001Func001Func005Func008C = (): boolean => {


	if ( ( ! ( IsTriggerEnabled( gg_trg_Stampede_Move ) === false ) ) ) {

		return false;

	}

	return true;

};


const Trig_Stampede_Func003Func001Func001Func005Func010002002 = (): boolean => {

	return ( IsUnitType( GetFilterUnit(), UNIT_TYPE_ANCIENT ) === true );

};


const Trig_Stampede_Func003Func001Func001Func005Func011Func008C = (): boolean => {


	if ( ( ! ( IsTriggerEnabled( gg_trg_Stampede_Move ) === false ) ) ) {

		return false;

	}

	return true;

};


const Trig_Stampede_Func003Func001Func001Func005Func011C = (): boolean => {


	if ( ( ! ( CountUnitsInGroup( udg_TempGroup2 ) > 0 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Stampede_Func003Func001Func001Func005C = (): boolean => {


	if ( ( ! ( CountUnitsInGroup( udg_TempGroup2 ) === 0 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Stampede_Func003Func001Func001C = (): boolean => {


	if ( ( ! ( GetUnitStateSwap( UNIT_STATE_LIFE, GetEnumUnit() ) === 62500 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Stampede_Func003Func001C = (): boolean => {


	if ( ( ! ( GetOwningPlayer( GetEnumUnit() ) !== Player( PLAYER_NEUTRAL_AGGRESSIVE ) ) ) ) {

		return false;

	}

	return true;

};


const Trig_Stampede_Func003A = (): void => {


	if ( ( Trig_Stampede_Func003Func001C() ) ) {


		if ( ( Trig_Stampede_Func003Func001Func001C() ) ) {

			udg_TempPoint2 = GetUnitLoc( GetEnumUnit() );
			udg_TempGroup2 = GetUnitsInRangeOfLocMatching( 1500, udg_TempPoint2, Condition( Trig_Stampede_Func003Func001Func001Func004002003 ) );

			if ( ( Trig_Stampede_Func003Func001Func001Func005C() ) ) {

				DestroyGroup( udg_TempGroup2 )
				udg_TempGroup2 = GetUnitsInRectMatching( GetEntireMapRect(), Condition( Trig_Stampede_Func003Func001Func001Func005Func010002002 ) );

				if ( ( Trig_Stampede_Func003Func001Func001Func005Func011C() ) ) {

					udg_StampedeSpeed[ GetConvertedPlayerId( GetOwningPlayer( GetEnumUnit() ) ) ] = 20;
					SetUnitLifeBJ( GetEnumUnit(), 62480 )
					SetUnitManaBJ( GetEnumUnit(), 0 )
					udg_StampedeUnit[ GetConvertedPlayerId( GetOwningPlayer( GetEnumUnit() ) ) ] = GroupPickRandomUnit( udg_TempGroup2 );
					SetUnitPathing( GetEnumUnit(), false )
					UnitAddAbilityBJ( FourCC( "A00S" ), GetEnumUnit() )
					SetUnitMoveSpeed( GetEnumUnit(), 1 )

					if ( ( Trig_Stampede_Func003Func001Func001Func005Func011Func008C() ) ) {

						EnableTrigger( gg_trg_Stampede_Move )

					} else {

					null

					}


				} else {

				null

				}


			} else {

				udg_StampedeSpeed[ GetConvertedPlayerId( GetOwningPlayer( GetEnumUnit() ) ) ] = 13;

				if ( ( Trig_Stampede_Func003Func001Func001Func005Func002C() ) ) {

					SetUnitManaBJ( GetEnumUnit(), 4 )

				} else {

				null

				}

				udg_StampedeUnit[ GetConvertedPlayerId( GetOwningPlayer( GetEnumUnit() ) ) ] = GroupPickRandomUnit( udg_TempGroup2 );
				SetUnitPathing( GetEnumUnit(), false )
				SetUnitLifeBJ( GetEnumUnit(), 62480 )
				UnitAddAbilityBJ( FourCC( "A00S" ), GetEnumUnit() )
				SetUnitMoveSpeed( GetEnumUnit(), 1 )

				if ( ( Trig_Stampede_Func003Func001Func001Func005Func008C() ) ) {

					EnableTrigger( gg_trg_Stampede_Move )

				} else {

				null

				}


			}

			DestroyGroup( udg_TempGroup2 )
			RemoveLocation( udg_TempPoint2 )

		} else {


			if ( ( Trig_Stampede_Func003Func001Func001Func001C() ) ) {

				CreateTextTagUnitBJ( "TRIGSTR_571", GetEnumUnit(), 0, 9.8, 100, 100, 100, 0 )
				SetTextTagVelocityBJ( GetLastCreatedTextTag(), 64, 90 )
				SetTextTagPermanentBJ( GetLastCreatedTextTag(), false )
				SetTextTagLifespanBJ( GetLastCreatedTextTag(), 3.2 )
				SetTextTagFadepointBJ( GetLastCreatedTextTag(), 1.6 )
				SetUnitLifeBJ( GetEnumUnit(), 62500 )

			} else {


				if ( ( Trig_Stampede_Func003Func001Func001Func001Func001C() ) ) {

					SetUnitLifeBJ( GetEnumUnit(), ( GetUnitStateSwap( UNIT_STATE_LIFE, GetEnumUnit() ) + 1 ) )

				} else {

					SetUnitLifeBJ( GetEnumUnit(), ( GetUnitStateSwap( UNIT_STATE_LIFE, GetEnumUnit() ) + GetRandomReal( 0.5, 1.5 ) ) )

				}


			}


		}


	} else {

	null

	}


};


const Trig_Stampede_Actions = (): void => {

	udg_TempGroup = GetUnitsOfTypeIdAll( FourCC( "E00C" ) );
	ForGroupBJ( udg_TempGroup, Trig_Stampede_Func003A )
	DestroyGroup( udg_TempGroup )

};


//===========================================================================
const InitTrig_Stampede = (): void => {

	gg_trg_Stampede = CreateTrigger();
	DisableTrigger( gg_trg_Stampede )
	TriggerRegisterTimerEventPeriodic( gg_trg_Stampede, 1 )
	TriggerAddAction( gg_trg_Stampede, Trig_Stampede_Actions )

};

addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_Stampede();

} );
