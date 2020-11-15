
import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";

//===========================================================================
// Trigger: Lightning Line
//===========================================================================
const Trig_Lightning_Line_Func003Func001Func001Func001C = (): boolean => {


	if ( ( ! ( GetUnitStateSwap( UNIT_STATE_MANA, GetEnumUnit() ) >= 14 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Lightning_Line_Func003Func001Func001Func004002003 = (): boolean => {

	return ( IsUnitType( GetFilterUnit(), UNIT_TYPE_ANCIENT ) === true );

};


const Trig_Lightning_Line_Func003Func001Func001Func005Func004Func012Func001C = (): boolean => {


	if ( ( ! ( UnitHasItemOfTypeBJ( udg_DamageSource[ udg_LoopIndex ], FourCC( "I018" ) ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Lightning_Line_Func003Func001Func001Func005Func004Func012C = (): boolean => {


	if ( ( ! ( UnitHasItemOfTypeBJ( udg_DamageSource[ udg_LoopIndex ], FourCC( "I016" ) ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Lightning_Line_Func003Func001Func001Func005Func004Func024C = (): boolean => {


	if ( ( ! ( udg_Lightning[ udg_Index ] === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Lightning_Line_Func003Func001Func001Func005C = (): boolean => {


	if ( ( ! ( CountUnitsInGroup( udg_TempGroup2 ) > 0 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Lightning_Line_Func003Func001Func001C = (): boolean => {


	if ( ( ! ( GetUnitStateSwap( UNIT_STATE_MANA, GetEnumUnit() ) >= 15 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Lightning_Line_Func003Func001C = (): boolean => {


	if ( ( ! ( GetOwningPlayer( GetEnumUnit() ) !== Player( PLAYER_NEUTRAL_AGGRESSIVE ) ) ) ) {

		return false;

	}

	return true;

};


const Trig_Lightning_Line_Func003A = (): void => {


	if ( ( Trig_Lightning_Line_Func003Func001C() ) ) {


		if ( ( Trig_Lightning_Line_Func003Func001Func001C() ) ) {

			udg_TempPoint2 = GetUnitLoc( GetEnumUnit() );
			udg_TempGroup2 = GetUnitsInRangeOfLocMatching( 900, udg_TempPoint2, Condition( Trig_Lightning_Line_Func003Func001Func001Func004002003 ) );

			if ( ( Trig_Lightning_Line_Func003Func001Func001Func005C() ) ) {

				udg_TempUnitGroup = GetRandomSubGroup( 1, udg_TempGroup2 );
				SetUnitManaPercentBJ( GetEnumUnit(), 0 )
				IssueImmediateOrderBJ( GetEnumUnit(), "stop" )
				bj_forLoopAIndex = 1;
				bj_forLoopAIndexEnd = 3;

				while ( true ) {

					if ( bj_forLoopAIndex > bj_forLoopAIndexEnd ) break;
					TriggerExecute( gg_trg_Reset )
					udg_TempPoint = GetUnitLoc( GroupPickRandomUnit( udg_TempUnitGroup ) );
					udg_StartPoint[ udg_Index ] = PolarProjectionBJ( udg_TempPoint2, I2R( ( GetForLoopIndexA() * 45 ) ), AngleBetweenPoints( udg_TempPoint2, udg_TempPoint ) );
					SetUnitFacingToFaceLocTimed( GetEnumUnit(), udg_TempPoint, 0 )
					udg_Angle[ udg_Index ] = AngleBetweenPoints( udg_StartPoint[ udg_Index ], udg_TempPoint );
					CreateNUnitsAtLoc( 1, FourCC( "h008" ), Player( PLAYER_NEUTRAL_AGGRESSIVE ), udg_StartPoint[ udg_Index ], udg_Angle[ udg_Index ] )
					UnitRemoveAbilityBJ( FourCC( "Amrf" ), GetLastCreatedUnit() )
					udg_Missile[ udg_Index ] = GetLastCreatedUnit();
					udg_DamageSource[ udg_Index ] = GetEnumUnit();
					udg_Jump[ udg_Index ] = false;
					udg_Teleportation[ udg_Index ] = 0;

					if ( ( Trig_Lightning_Line_Func003Func001Func001Func005Func004Func012C() ) ) {

						udg_Distance[ udg_Index ] = 700;
						udg_Damage[ udg_Index ] = 60;

					} else {


						if ( ( Trig_Lightning_Line_Func003Func001Func001Func005Func004Func012Func001C() ) ) {

							udg_Distance[ udg_Index ] = 800;
							udg_Damage[ udg_Index ] = 120;

						} else {

							udg_Damage[ udg_Index ] = 240;
							udg_Distance[ udg_Index ] = 1000;

						}


					}

					udg_AttackType[ udg_Index ] = ATTACK_TYPE_CHAOS;
					udg_DamageMethod[ udg_Index ] = 1;
					udg_ExplodeRadius[ udg_Index ] = 90;
					udg_DamageSpecialEffect[ udg_Index ] = "";
					udg_DamageSpecialEffectLocation[ udg_LoopIndex ] = "origin";
					udg_CollisionRadius[ udg_Index ] = 90;
					udg_Targets[ udg_Index ] = 1;
					udg_TargetsAdvanced[ udg_Index ] = 0;
					udg_Drag[ udg_Index ] = false;
					udg_Link[ udg_Index ] = false;
					udg_Lightning[ udg_Index ] = false;

					if ( ( Trig_Lightning_Line_Func003Func001Func001Func005Func004Func024C() ) ) {

						AddLightningLoc( "CLPB", udg_StartPoint[ udg_Index ], udg_StartPoint[ udg_Index ] )
						udg_LightningEffect[ udg_Index ] = GetLastCreatedLightningBJ();

					} else {

					null

					}

					udg_Speed[ udg_Index ] = ( udg_Distance[ udg_Index ] * 0.03 );
					udg_VerticalArc[ udg_Index ] = 0;
					udg_HorizontalArc[ udg_Index ] = 0;
					udg_MissileEffectString[ udg_Index ] = "Abilities\\Spells\\Orc\\Purge\\PurgeBuffTarget.mdl";
					AddSpecialEffectTargetUnitBJ( "chest", GetLastCreatedUnit(), udg_MissileEffectString[ udg_Index ] )
					udg_MissileEffect[ udg_Index ] = GetLastCreatedEffectBJ();
					udg_MissileSize[ udg_Index ] = 100;
					SetUnitScalePercent( GetLastCreatedUnit(), udg_MissileSize[ udg_Index ], udg_MissileSize[ udg_Index ], udg_MissileSize[ udg_Index ] )
					SetUnitVertexColorBJ( GetLastCreatedUnit(), 100, 100, 100, 0 )
					udg_TerrainReaction[ udg_Index ] = 0;
					udg_TreeReaction[ udg_Index ] = 0;
					udg_BoundaryReaction[ udg_Index ] = 0;
					udg_BuildingReaction[ udg_Index ] = 0;
					RemoveLocation( udg_TempPoint )
					bj_forLoopAIndex = bj_forLoopAIndex + 1;

				}


				DestroyGroup( udg_TempUnitGroup )

			} else {

			null

			}

			DestroyGroup( udg_TempGroup2 )
			RemoveLocation( udg_TempPoint2 )

		} else {


			if ( ( Trig_Lightning_Line_Func003Func001Func001Func001C() ) ) {

				CreateTextTagUnitBJ( "TRIGSTR_572", GetEnumUnit(), 0, 9.8, 100, 100, 100, 0 )
				SetTextTagVelocityBJ( GetLastCreatedTextTag(), 64, 90 )
				SetTextTagPermanentBJ( GetLastCreatedTextTag(), false )
				SetTextTagLifespanBJ( GetLastCreatedTextTag(), 3.2 )
				SetTextTagFadepointBJ( GetLastCreatedTextTag(), 1.6 )

			} else {

			null

			}


		}


	} else {

	null

	}


};


const Trig_Lightning_Line_Actions = (): void => {

	udg_TempGroup = GetUnitsOfTypeIdAll( FourCC( "E00C" ) );
	ForGroupBJ( udg_TempGroup, Trig_Lightning_Line_Func003A )
	DestroyGroup( udg_TempGroup )

};


//===========================================================================
const InitTrig_Lightning_Line = (): void => {

	gg_trg_Lightning_Line = CreateTrigger();
	DisableTrigger( gg_trg_Lightning_Line )
	TriggerRegisterTimerEventPeriodic( gg_trg_Lightning_Line, 1 )
	TriggerAddAction( gg_trg_Lightning_Line, Trig_Lightning_Line_Actions )

};

addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_Lightning_Line();

} );
