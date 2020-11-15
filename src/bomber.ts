
import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";



//===========================================================================
// Trigger: Bomber
//===========================================================================
const Trig_Bomber_Conditions = (): boolean => {


	if ( ( ! ( GetUnitTypeId( GetAttacker() ) === FourCC( "E008" ) ) ) ) {

		return false;

	}


	if ( ( ! ( GetRandomInt( 1, 2 ) === 1 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Bomber_Func002Func001Func009C = (): boolean => {


	if ( ( ! ( udg_Jump[ udg_Index ] === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Bomber_Func002Func001Func024C = (): boolean => {


	if ( ( ! ( udg_Lightning[ udg_Index ] === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Bomber_Func002Func001Func039C = (): boolean => {


	if ( ( ! ( GetUnitAbilityLevelSwapped( FourCC( "A00R" ), GetTriggerUnit() ) > 0 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Bomber_Func002Func001Func040Func010C = (): boolean => {


	if ( ( ! ( udg_Jump[ udg_Index ] === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Bomber_Func002Func001Func040Func025C = (): boolean => {


	if ( ( ! ( udg_Lightning[ udg_Index ] === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Bomber_Func002Func001Func040Func040C = (): boolean => {


	if ( ( ! ( GetUnitAbilityLevelSwapped( FourCC( "A00R" ), GetTriggerUnit() ) > 0 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Bomber_Func002Func001C = (): boolean => {


	if ( ( ! ( UnitHasItemOfTypeBJ( GetAttacker(), FourCC( "I00W" ) ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Bomber_Func002Func002Func010C = (): boolean => {


	if ( ( ! ( udg_Jump[ udg_Index ] === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Bomber_Func002Func002Func025C = (): boolean => {


	if ( ( ! ( udg_Lightning[ udg_Index ] === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Bomber_Func002Func002Func040C = (): boolean => {


	if ( ( ! ( GetUnitAbilityLevelSwapped( FourCC( "A00R" ), GetTriggerUnit() ) > 0 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Bomber_Func002C = (): boolean => {


	if ( ( ! ( UnitHasItemOfTypeBJ( GetAttacker(), FourCC( "I00V" ) ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Bomber_Actions = (): void => {

	udg_TempPoint = GetUnitLoc( GetAttackedUnitBJ() );

	if ( ( Trig_Bomber_Func002C() ) ) {

		bj_forLoopAIndex = 1;
		bj_forLoopAIndexEnd = 3;

		while ( true ) {

			if ( bj_forLoopAIndex > bj_forLoopAIndexEnd ) break;
			TriggerExecute( gg_trg_Reset )
			udg_StartPoint[ udg_Index ] = GetUnitLoc( GetAttacker() );
			udg_Angle[ udg_Index ] = AngleBetweenPoints( udg_StartPoint[ udg_Index ], udg_TempPoint );
			udg_Angle[ udg_Index ] = ( udg_Angle[ udg_Index ] + I2R( ( 30 - ( GetForLoopIndexA() * 15 ) ) ) );
			CreateNUnitsAtLoc( 1, FourCC( "h008" ), Player( PLAYER_NEUTRAL_AGGRESSIVE ), udg_StartPoint[ udg_Index ], udg_Angle[ udg_Index ] )
			UnitRemoveAbilityBJ( FourCC( "Amrf" ), GetLastCreatedUnit() )
			udg_Missile[ udg_Index ] = GetLastCreatedUnit();
			udg_DamageSource[ udg_Index ] = GetAttacker();
			udg_Jump[ udg_Index ] = false;

			if ( ( Trig_Bomber_Func002Func002Func010C() ) ) {

				UnitAddAbilityBJ( FourCC( "Amrf" ), GetTriggerUnit() )
				UnitRemoveAbilityBJ( FourCC( "Amrf" ), GetTriggerUnit() )

			} else {

			null

			}

			udg_Teleportation[ udg_Index ] = 0;
			udg_Distance[ udg_Index ] = 300;
			udg_AttackType[ udg_Index ] = ATTACK_TYPE_CHAOS;
			udg_DamageMethod[ udg_Index ] = 0;
			udg_ExplodeRadius[ udg_Index ] = 200;
			udg_DamageSpecialEffect[ udg_Index ] = "";
			udg_DamageSpecialEffectLocation[ udg_LoopIndex ] = "origin";
			udg_CollisionRadius[ udg_Index ] = 0;
			udg_Damage[ udg_Index ] = 80;
			udg_Targets[ udg_Index ] = 1;
			udg_TargetsAdvanced[ udg_Index ] = 2;
			udg_Drag[ udg_Index ] = false;
			udg_Link[ udg_Index ] = false;
			udg_Lightning[ udg_Index ] = false;

			if ( ( Trig_Bomber_Func002Func002Func025C() ) ) {

				AddLightningLoc( "CLPB", udg_StartPoint[ udg_Index ], udg_StartPoint[ udg_Index ] )
				udg_LightningEffect[ udg_Index ] = GetLastCreatedLightningBJ();

			} else {

			null

			}

			udg_Speed[ udg_Index ] = 300;
			udg_Speed[ udg_Index ] = ( udg_Speed[ udg_Index ] * 0.03 );
			udg_VerticalArc[ udg_Index ] = 0;
			udg_HorizontalArc[ udg_Index ] = 0;
			udg_MissileEffectString[ udg_Index ] = "Units\\Demon\\Infernal\\InfernalBirth.mdl";
			AddSpecialEffectTargetUnitBJ( "chest", GetLastCreatedUnit(), udg_MissileEffectString[ udg_Index ] )
			udg_MissileEffect[ udg_Index ] = GetLastCreatedEffectBJ();
			udg_MissileSize[ udg_Index ] = 100;
			SetUnitScalePercent( GetLastCreatedUnit(), udg_MissileSize[ udg_Index ], udg_MissileSize[ udg_Index ], udg_MissileSize[ udg_Index ] )
			SetUnitVertexColorBJ( GetLastCreatedUnit(), 100, 100, 100, 0 )
			udg_TerrainReaction[ udg_Index ] = 0;
			udg_TreeReaction[ udg_Index ] = 0;
			udg_BoundaryReaction[ udg_Index ] = 0;
			udg_BuildingReaction[ udg_Index ] = 0;

			if ( ( Trig_Bomber_Func002Func002Func040C() ) ) {

				udg_ExplodeRadius[ udg_Index ] = ( udg_ExplodeRadius[ udg_Index ] * 2 );

			} else {

			null

			}

			bj_forLoopAIndex = bj_forLoopAIndex + 1;

		}



	} else {


		if ( ( Trig_Bomber_Func002Func001C() ) ) {

			bj_forLoopAIndex = 1;
			bj_forLoopAIndexEnd = 2;

			while ( true ) {

				if ( bj_forLoopAIndex > bj_forLoopAIndexEnd ) break;
				TriggerExecute( gg_trg_Reset )
				udg_StartPoint[ udg_Index ] = GetUnitLoc( GetAttacker() );
				udg_Angle[ udg_Index ] = AngleBetweenPoints( udg_StartPoint[ udg_Index ], udg_TempPoint );
				udg_Angle[ udg_Index ] = ( udg_Angle[ udg_Index ] + I2R( ( 30 - ( GetForLoopIndexA() * 20 ) ) ) );
				CreateNUnitsAtLoc( 1, FourCC( "h008" ), Player( PLAYER_NEUTRAL_AGGRESSIVE ), udg_StartPoint[ udg_Index ], udg_Angle[ udg_Index ] )
				UnitRemoveAbilityBJ( FourCC( "Amrf" ), GetLastCreatedUnit() )
				udg_Missile[ udg_Index ] = GetLastCreatedUnit();
				udg_DamageSource[ udg_Index ] = GetAttacker();
				udg_Jump[ udg_Index ] = false;

				if ( ( Trig_Bomber_Func002Func001Func040Func010C() ) ) {

					UnitAddAbilityBJ( FourCC( "Amrf" ), GetTriggerUnit() )
					UnitRemoveAbilityBJ( FourCC( "Amrf" ), GetTriggerUnit() )

				} else {

				null

				}

				udg_Teleportation[ udg_Index ] = 0;
				udg_Distance[ udg_Index ] = 300;
				udg_AttackType[ udg_Index ] = ATTACK_TYPE_CHAOS;
				udg_DamageMethod[ udg_Index ] = 0;
				udg_ExplodeRadius[ udg_Index ] = 200;
				udg_DamageSpecialEffect[ udg_Index ] = "";
				udg_DamageSpecialEffectLocation[ udg_LoopIndex ] = "origin";
				udg_CollisionRadius[ udg_Index ] = 0;
				udg_Damage[ udg_Index ] = 80;
				udg_Targets[ udg_Index ] = 1;
				udg_TargetsAdvanced[ udg_Index ] = 2;
				udg_Drag[ udg_Index ] = false;
				udg_Link[ udg_Index ] = false;
				udg_Lightning[ udg_Index ] = false;

				if ( ( Trig_Bomber_Func002Func001Func040Func025C() ) ) {

					AddLightningLoc( "CLPB", udg_StartPoint[ udg_Index ], udg_StartPoint[ udg_Index ] )
					udg_LightningEffect[ udg_Index ] = GetLastCreatedLightningBJ();

				} else {

				null

				}

				udg_Speed[ udg_Index ] = 300;
				udg_Speed[ udg_Index ] = ( udg_Speed[ udg_Index ] * 0.03 );
				udg_VerticalArc[ udg_Index ] = 0;
				udg_HorizontalArc[ udg_Index ] = 0;
				udg_MissileEffectString[ udg_Index ] = "Units\\Demon\\Infernal\\InfernalBirth.mdl";
				AddSpecialEffectTargetUnitBJ( "chest", GetLastCreatedUnit(), udg_MissileEffectString[ udg_Index ] )
				udg_MissileEffect[ udg_Index ] = GetLastCreatedEffectBJ();
				udg_MissileSize[ udg_Index ] = 100;
				SetUnitScalePercent( GetLastCreatedUnit(), udg_MissileSize[ udg_Index ], udg_MissileSize[ udg_Index ], udg_MissileSize[ udg_Index ] )
				SetUnitVertexColorBJ( GetLastCreatedUnit(), 100, 100, 100, 0 )
				udg_TerrainReaction[ udg_Index ] = 0;
				udg_TreeReaction[ udg_Index ] = 0;
				udg_BoundaryReaction[ udg_Index ] = 0;
				udg_BuildingReaction[ udg_Index ] = 0;

				if ( ( Trig_Bomber_Func002Func001Func040Func040C() ) ) {

					udg_ExplodeRadius[ udg_Index ] = ( udg_ExplodeRadius[ udg_Index ] * 2 );

				} else {

				null

				}

				bj_forLoopAIndex = bj_forLoopAIndex + 1;

			}



		} else {

			TriggerExecute( gg_trg_Reset )
			udg_StartPoint[ udg_Index ] = GetUnitLoc( GetAttacker() );
			udg_Angle[ udg_Index ] = AngleBetweenPoints( udg_StartPoint[ udg_Index ], udg_TempPoint );
			CreateNUnitsAtLoc( 1, FourCC( "h008" ), Player( PLAYER_NEUTRAL_AGGRESSIVE ), udg_StartPoint[ udg_Index ], udg_Angle[ udg_Index ] )
			UnitRemoveAbilityBJ( FourCC( "Amrf" ), GetLastCreatedUnit() )
			udg_Missile[ udg_Index ] = GetLastCreatedUnit();
			udg_DamageSource[ udg_Index ] = GetAttacker();
			udg_Jump[ udg_Index ] = false;

			if ( ( Trig_Bomber_Func002Func001Func009C() ) ) {

				UnitAddAbilityBJ( FourCC( "Amrf" ), GetTriggerUnit() )
				UnitRemoveAbilityBJ( FourCC( "Amrf" ), GetTriggerUnit() )

			} else {

			null

			}

			udg_Teleportation[ udg_Index ] = 0;
			udg_Distance[ udg_Index ] = 300;
			udg_AttackType[ udg_Index ] = ATTACK_TYPE_CHAOS;
			udg_DamageMethod[ udg_Index ] = 0;
			udg_ExplodeRadius[ udg_Index ] = 200;
			udg_DamageSpecialEffect[ udg_Index ] = "";
			udg_DamageSpecialEffectLocation[ udg_LoopIndex ] = "origin";
			udg_CollisionRadius[ udg_Index ] = 0;
			udg_Damage[ udg_Index ] = 80;
			udg_Targets[ udg_Index ] = 1;
			udg_TargetsAdvanced[ udg_Index ] = 2;
			udg_Drag[ udg_Index ] = false;
			udg_Link[ udg_Index ] = false;
			udg_Lightning[ udg_Index ] = false;

			if ( ( Trig_Bomber_Func002Func001Func024C() ) ) {

				AddLightningLoc( "CLPB", udg_StartPoint[ udg_Index ], udg_StartPoint[ udg_Index ] )
				udg_LightningEffect[ udg_Index ] = GetLastCreatedLightningBJ();

			} else {

			null

			}

			udg_Speed[ udg_Index ] = 300;
			udg_Speed[ udg_Index ] = ( udg_Speed[ udg_Index ] * 0.03 );
			udg_VerticalArc[ udg_Index ] = 0;
			udg_HorizontalArc[ udg_Index ] = 0;
			udg_MissileEffectString[ udg_Index ] = "Units\\Demon\\Infernal\\InfernalBirth.mdl";
			AddSpecialEffectTargetUnitBJ( "chest", GetLastCreatedUnit(), udg_MissileEffectString[ udg_Index ] )
			udg_MissileEffect[ udg_Index ] = GetLastCreatedEffectBJ();
			udg_MissileSize[ udg_Index ] = 100;
			SetUnitScalePercent( GetLastCreatedUnit(), udg_MissileSize[ udg_Index ], udg_MissileSize[ udg_Index ], udg_MissileSize[ udg_Index ] )
			SetUnitVertexColorBJ( GetLastCreatedUnit(), 100, 100, 100, 0 )
			udg_TerrainReaction[ udg_Index ] = 0;
			udg_TreeReaction[ udg_Index ] = 0;
			udg_BoundaryReaction[ udg_Index ] = 0;
			udg_BuildingReaction[ udg_Index ] = 0;

			if ( ( Trig_Bomber_Func002Func001Func039C() ) ) {

				udg_ExplodeRadius[ udg_Index ] = ( udg_ExplodeRadius[ udg_Index ] * 2 );

			} else {

			null

			}


		}


	}

	RemoveLocation( udg_TempPoint )

};


//===========================================================================
const InitTrig_Bomber = (): void => {

	gg_trg_Bomber = CreateTrigger();
	TriggerRegisterAnyUnitEventBJ( gg_trg_Bomber, EVENT_PLAYER_UNIT_ATTACKED )
	TriggerAddCondition( gg_trg_Bomber, Condition( Trig_Bomber_Conditions ) )
	TriggerAddAction( gg_trg_Bomber, Trig_Bomber_Actions )

};

addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_Bomber();

} );
